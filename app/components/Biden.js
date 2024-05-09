import { revalidateTag } from "next/cache";
import Image from "next/image";
import biden from "../../public/biden.jpg";
import dbConnect from "../connect/mongodb";
import Votes from "../modals/Votes";

const Biden = async () => {
  const addBidenVote = async (formData) => {
    "use server";
    await dbConnect();

    // Find an existing vote record or create a new one
    let existingVote = await Votes.findOne();

    if (existingVote) {
      // Convert Biden's existing vote count to a number, increment by 1, then convert back to a string
      const bidenVotes = parseInt(existingVote.biden || "0", 10) + 1;
      existingVote.biden = bidenVotes.toString();

      // Save the updated document back to the database
      await existingVote.save();
      revalidateTag("votes");
    } else {
      // If no existing record is found, create a new one with the initial counts
      const newVote = await Votes.create({
        biden: "1",
        trump: "0",
      });
    }
  };

  return (
    <form action={addBidenVote}>
      <div className=" w-[200px] h-[200px] relative">
        <Image fill className="object-cover" src={biden} alt="biden" />
      </div>
      <div className="flex justify-center mt-5">
        <button className="flex gap-2 items-center bg-blue-500 px-6 py-2.5 text-white font-semibold hover:bg-blue-600 group">
          <span>Vote</span>
          <svg
            className="group-hover:-translate-y-[2px] transition-transform duration-300"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Biden;
