import React from "react";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ text, id, isCompleted, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isCompleted ? (
          <FaCheckCircle className="text-3xl text-neutral-700" />
        ) : (
          <FaCircle className="text-3xl text-neutral-700" />
        )}
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <MdDelete
        onClick={() => {
          deleteTodo(id);
        }}
        className="text-2xl text-neutral-700 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
