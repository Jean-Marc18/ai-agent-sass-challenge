import Form from "next/form";

import { Input } from "./ui/input";

import analyseYoutubeVideo from "@/actions/analyseYoutubeVideo";

import AnalyseButton from "./AnalyseButton";

const Search = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form
        action={analyseYoutubeVideo}
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <Input
          name="url"
          placeholder="Enter Youtube URL"
          className="h-12 rounded-xl placeholder:text-white text-white w-[33vw] max-sm:w-full backdrop-blur-sm"
        />
        <AnalyseButton />
      </Form>
    </div>
  );
};

export default Search;
