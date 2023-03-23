import Container from "@/components/Container";

const RequestQuotation = () => {
  return (
    <Container>
      <div className="min-h-[calc(100vh-208px)] p-6">
        <div className="mt-0 mb-8 flex justify-center md:mt-16 md:mb-28">
          <span className="text-center text-4xl font-bold md:text-6xl">
            Permohonan Penawaran
          </span>
        </div>

        {/* <div className="mx-auto w-full max-w-lg">
          <form className="flex flex-col gap-4">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Name
              </span>
              <input
                type="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Masukkan nama anda"
              />
            </label>

            <label className="block">
              <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Phone Number
              </span>
              <input
                type="phoneNumber"
                name="phoneNumber"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Masukkan nomor telepon / WhatsApp anda"
              />
            </label>

            <label className="block">
              <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Masukkan email anda"
              />
            </label>
          </form>
        </div> */}
      </div>
    </Container>
  );
};

RequestQuotation.pageTitle = "Permohonan Penawaran";

export default RequestQuotation;
