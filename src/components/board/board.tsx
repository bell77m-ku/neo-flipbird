import { component$, useSignal, $, useTask$} from '@builder.io/qwik';
import { Link} from '@builder.io/qwik-city';

import axios from 'axios';

export interface BoardProps {
  board_id: number;
  board_title : string;
  board_description : string;
  board_tags : string[];
  board_like: number;
  board_dislike: number;
  board_date : string;
}


export const Board = component$<BoardProps>((props) => {

 const addLike = $(() => {
    // Increment the like count
    const newLikeCount = props.board_like + 1;

    // Send a PUT request to update the like count for the specific board
    fetch(`http://127.0.0.1:5000/boards/${props.board_id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "like": newLikeCount})
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        console.log('Success:', data);
        // Update the like count in the component state or wherever it's managed
        // (if necessary)
    })
    .catch(error => {
        console.error('Error:', error);
    });
});






 
  const tagElements = props.board_tags.map((tag, index) => (
    <span key={index} class="underline mr-2">{`#${tag}`}</span>
  ));
  return (

      <div class="container">
      <section class="selection:container">
        <div class="flex flex-col px-12 pt-9 pb-5 mt-32 rounded-3xl border-black border-solid border-[3px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Link class="text-black" href={`/comments/${props.board_id}`}>
          <div class="flex gap-5 text-black max-md:flex-wrap max-md:max-w-full">
            <div class="flex-auto text-4xl">{props.board_title}</div>
            <div class="flex-auto self-start text-base">{props.board_date}</div>
          </div>
          <div class="mt-6 text-2xl text-black  max-md:max-w-full">
           Tags : {tagElements}{/*  <span class="underline">#9/11</span>{" "}
            <span class="underline">#terrorism</span>{" "}
            <span class="underline">#gae</span>{" "}
            <span class="underline">#yourmom</span> */}
          </div>
          <div class="mt-10 text-2xl text-black max-md:max-w-full">
            {props.board_description}
          </div>
          </Link>

          
          <div class="flex flex-col md:flex-row gap-5 items-start mt-6 md:mt-10 max-w-full md:w-[336px]">
          
          <button class = "bg-transparent" onClick$={addLike}>
            <div class="flex flex-1 gap-4 items-start px-3 py-px text-3xl whitespace-nowrap bg-white">
              <div class="justify-center self-start px-5 py-1.5 bg-white border-2 border-black border-solid rounded-[50px] text-zinc-950">
                🖕 
              </div>
              <div class="my-auto text-black">{props.board_like}</div>
            </div>
            </button>

            <button class = "bg-transparent" onClick$={() => props.board_dislike}>
            <div class="flex flex-1 gap-4 items-start px-3 py-px text-3xl whitespace-nowrap bg-white">
              <div class="justify-center self-start px-5 py-1.5 bg-white border-2 border-black border-solid rounded-[50px] text-zinc-950 rotate-180">
                🖕
              </div>
              <div class="my-auto text-black">{props.board_dislike}</div>
            </div>
            </button>
            

          </div>
        </div>
      </section>
      </div>

  );
});


