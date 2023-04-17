import Container from "@/components/Container";

const RequestQuotation = () => {
  return (
    <Container>
      <div className="min-h-[calc(100vh-208px)] ">
        <div className="mt-0 mb-8 flex justify-center p-6 md:mt-16 md:mb-28">
          <span className="text-center text-4xl font-bold md:text-6xl">
            Permohonan Penawaran
          </span>
        </div>

        <div className="mt-2 flex flex-col items-center justify-center gap-1 rounded-xl bg-red-200 p-4 text-sm sm:flex-row md:mt-8">
          <span className="font-bold">Perhatian!</span>
          <span>
            Baca syarat dan ketentuan terlebih dahulu sebelum mengisi form.
          </span>

          <a
            href="https://drive.google.com/drive/folders/1MF0LaWcPHcdgFStnKkX5RVrvBXqivFEl"
            target="_blank"
            className="text-sm text-blue-500 hover:text-blue-800"
          >
            Syarat dan Ketentuan
          </a>
        </div>

        <div className="mb-12 mt-12 w-full text-center md:mb-28">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScABR75mI1TfM2KtJP_P1gcs-YN1bnZhxzZGkeTQQCywsxKPQ/viewform?embedded=true"
            width="100%"
            height="2800"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </Container>
  );
};

RequestQuotation.title = "Permohonan Penawaran";

export default RequestQuotation;
