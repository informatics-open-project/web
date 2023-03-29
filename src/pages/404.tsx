import Container from "@/components/Container";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="flex h-[calc(100vh-208px)] flex-col items-center justify-center gap-4 p-4">
        <div className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold tracking-wide text-red-500 ">
          404
        </div>

        <span className=" sm:text-md mx-auto w-5/6 max-w-3xl p-2 text-center text-sm text-slate-400 md:text-lg">
          Halaman yang anda cari tidak ditemukan
        </span>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button
            className="outline-button"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => router.back()}
          >
            Kembali
          </button>
        </div>
      </div>
    </Container>
  );
};

NotFound.title = "Halaman Tidak Ditemukan";

export default NotFound;
