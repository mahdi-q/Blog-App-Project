"use client";

import Button from "@/ui/Button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function Error({ error, reset }) {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex flex-col items-center justify-center pt-10">
          <p className="mb-8 text-xl font-bold text-red-500">{error.message}</p>

          <Button
            variant="outline"
            onClick={reset}
            className="outline-button flex items-center gap-x-2 px-6 py-2"
          >
            <ArrowPathIcon className="h-5 w-5 text-primary-900" />

            <span>تلاش دوباره</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Error;
