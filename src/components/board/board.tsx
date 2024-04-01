import { component$, useSignal} from '@builder.io/qwik';
import { Link} from '@builder.io/qwik-city';

import axios from 'axios';

export interface BoardProps {
  board_id: number;
  board_title : string;
  board_description : string;
  board_tags : string[];
  board_date : string;
  board_like: number;
  board_dislike: number;
}


export const Board = component$<BoardProps>((props) => {
  


  const countLike = useSignal(0);
  const countDislike = useSignal(0);

 
  const tagElements = props.board_tags.map((tag, index) => (
    <span key={index} class="underline mr-2">{`#${tag}`}</span>
  ));
  return (

      <div class="container">
      <section class="selection:container">
        <div class="flex flex-col px-12 pt-9 pb-5 mt-32 rounded-3xl border-black border-solid border-[3px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Link class="text-black" href="/comments">
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

          <button class = "bg-transparent" onClick$={()=>countLike.value++}>
            <div class="flex flex-1 gap-4 items-start px-3 py-px text-3xl whitespace-nowrap bg-white">
              <div class="justify-center self-start px-5 py-1.5 bg-white border-2 border-black border-solid rounded-[50px] text-zinc-950">
                🖕
              </div>
              
              <div class="my-auto text-black">{props.board_like} {countLike}</div>
            </div>
            </button>

            <button class = "bg-transparent" onClick$={() => countDislike.value++}>
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


