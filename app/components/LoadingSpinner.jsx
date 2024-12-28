const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 border-4 border-[#002B5C] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-16 h-16 border-4 border-[#009688] border-t-transparent rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
