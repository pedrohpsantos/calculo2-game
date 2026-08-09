export function useSound() {
  // Dummy functions to prevent build errors
  // since actual sound files were removed to clean up the repository.
  const playSuccess = () => {};
  const playError = () => {};

  return { playSuccess, playError };
}
