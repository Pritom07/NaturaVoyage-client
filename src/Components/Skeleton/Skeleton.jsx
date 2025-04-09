const Skeleton = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex w-52 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full bg-green-200"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20 bg-green-200"></div>
            <div className="skeleton h-4 w-28 bg-green-200"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full bg-green-200"></div>
      </div>
    </div>
  );
};

export default Skeleton;
