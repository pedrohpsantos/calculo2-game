/**
 * Logger customizado para prevenir vazamento de informações sensíveis em produção.
 * Em desenvolvimento (Vite), exibe todos os logs normalmente.
 * Em produção, silencia logs informativos e de debug, e filtra logs de erro.
 */

const isProd = import.meta.env.PROD;

export const logger = {
  log: (...args: any[]) => {
    if (!isProd) {
      console.log(...args);
    }
  },
  warn: (...args: any[]) => {
    if (!isProd) {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {
    // Em produção, podemos querer enviar erros para um serviço como Sentry.
    // Por enquanto, apenas exibimos erros genéricos ou controlados.
    if (!isProd) {
      console.error(...args);
    } else {
      // Oculta o stack trace detalhado e os argumentos do console público
      console.error('Um erro interno ocorreu (Logger):', args[0]?.message || 'Erro não especificado.');
    }
  },
  debug: (...args: any[]) => {
    if (!isProd) {
      console.debug(...args);
    }
  }
};
