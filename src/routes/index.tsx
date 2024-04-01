import { component$, useSignal, useStore, useResource$ ,Resource} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "../components/starter/counter/counter";
import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";
import Starter from "../components/starter/next-steps/next-steps";
import { Board } from "~/components/board/board";
import { SearchBar } from "~/components/searchBar/searchBar";
import { NextPageBoard } from "~/components/nextPageBoard/nextPageBoard";
import { PopularTag } from "~/components/popular_tag/popular-tag";
import { AddBoard } from "~/components/addBoard/addBoard";
import axios from "axios";


type  board = {      
  "board_date": string,
  "board_id": number,
  "board_name": string,
  "description": string,
  "dislike": number,
  "like": number
}

export default component$(() => {

  // const jsonData = {
      
  //       "board_date": "0-0-0-0",
  //       "board_id": 1,
  //       "board_name": "Board 2",
  //       "description": "description",
  //       "dislike": 0,
  //       "like": 0
      
  // };

  // const inc = async () => {await fetch('http://127.0.0.1:5000/boards', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify( jsonData)}) .then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error('Network response was not ok.');
  //   }
  // })
  // .then(data => {
  //   console.log('Success:', data);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // })};
  // inc();

  
 
  const boardsData = useResource$( async ()=>{ 
     const res = await fetch("http://127.0.0.1:5000/boards");
     const data = await res.json();
     return data.boards;
  });
 

  //  
  // (d :board) => <Board key={val.value++} board_id={d.board_id} board_title={d.board_name} board_date={d.board_date} board_dislike={d.dislike} board_like={d.like} board_description={d.description} board_tags={["hi", "hello"]}/>
  return (
    <>
      <PopularTag/>
      <SearchBar />
      <AddBoard link="/createBoard"/>
    
      <div>
        <Resource
          value={boardsData}
          onPending={() => <p>Loading...</p>}
          onResolved={data =>data.map((d :board, index: number) =>  <Board key={index} board_id={d.board_id} board_title={d.board_name} board_date={d.board_date} board_dislike={d.dislike} board_like={d.like} board_description={d.description} board_tags={["hi", "hello"]}/>)}
        />

      </div>
      <NextPageBoard/>
      
      {/* <Hero />
      <Starter />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
        <Counter />
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            CLI Commands
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br />
              Starts the development server and watches for changes
            </p>
            <p>
              <code>npm run preview</code>
              <br />
              Creates production build and starts a server to preview it
            </p>
            <p>
              <code>npm run build</code>
              <br />
              Creates production build
            </p>
            <p>
              <code>npm run qwik add</code>
              <br />
              Runs the qwik CLI to add integrations
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Example Apps
            </div>
            <p>
              Have a look at the <a href="/demo/flower">Flower App</a> or the{" "}
              <a href="/demo/todolist">Todo App</a>.
            </p>
          </Infobox>

          <Infobox>
            <div q:slot="title" class="icon icon-community">
              Community
            </div>
            <ul>
              <li>
                <span>Questions or just want to say hi? </span>
                <a href="https://qwik.builder.io/chat" target="_blank">
                  Chat on discord!
                </a>
              </li>
              <li>
                <span>Follow </span>
                <a href="https://twitter.com/QwikDev" target="_blank">
                  @QwikDev
                </a>
                <span> on Twitter</span>
              </li>
              <li>
                <span>Open issues and contribute on </span>
                <a href="https://github.com/BuilderIO/qwik" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <span>Watch </span>
                <a href="https://qwik.builder.io/media/" target="_blank">
                  Presentations, Podcasts, Videos, etc.
                </a>
              </li>
            </ul>
          </Infobox>
        </div>
      </div> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to FlipBird",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
