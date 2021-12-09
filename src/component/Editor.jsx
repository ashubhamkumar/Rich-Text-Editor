import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorComponent = () => {
  const [body, setbody] = useState("");
  const [title, settitle] = useState("");

  return (
    <div className="flex-col flex-wrap  my-10 border-2 px-5 py-10 shadow-md rounded-lg ">
      <div className="overflow-hidden bg-white">
        <input
          className=" flex w-full  rounded-t-md px-5 py-5 bg-white text-black"
          placeholder="Document Title"
          value={title}
          onChange={(event) => settitle(event.target.value)}
        ></input>
        <ReactQuill
          className="min-h-full min-w-auto"
          placeholder="Start Writing here ..."
          value={body}
          onChange={setbody}
          modules={EditorComponent.modules}
          formats={EditorComponent.formats}
        ></ReactQuill>
        <div class="px-4 py-3 rounded-b-md bg-gray-100 text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center py-1.5 px-5 border border-transparent shadow-sm text-lg font-semibold rounded-md text-white bg-gray-700 hover:bg-green-400 hover:text-black "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

//Editor configuration
EditorComponent.modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6] }, { font: [] }],
      [{ size: [] }],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      color: function (value) {
        if (value === "custom-color")
          value = window.prompt("Enter Hex Color Code");
        this.quill.format("color", value);
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

EditorComponent.formats = [
  "header",
  "font",
  "size",
  "color",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "emoji",
];

export default EditorComponent;
