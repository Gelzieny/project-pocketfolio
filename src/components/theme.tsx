export function Theme() {
  return (
    <div className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-72 h-72 
        bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl 
        opacity-70 dark:opacity-30 dark:bg-purple-600 
        -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 
        bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl 
        opacity-70 dark:opacity-30 dark:bg-blue-600 
        -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 
        bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl 
        opacity-70 dark:opacity-30 dark:bg-indigo-600 
        -translate-y-1/2" />
    </div>
  );
}
