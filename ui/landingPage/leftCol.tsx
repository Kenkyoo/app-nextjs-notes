import FormSendEmail from "@/components/send/formSendEmail";

export default function LeftCol() {
  return (
    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
        App
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mr-3">
          Notes
        </span>
        web for take notes!
      </h1>
      <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
        App Notes is a app build with NextJs and Tailwind. Sql for database.
        Also Hanko provider for Auth.
      </p>
      <FormSendEmail />
    </div>
  );
}
