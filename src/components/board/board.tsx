import { component$, useStylesScoped$} from '@builder.io/qwik';

export interface BoardProps {

}

export const Board = component$<BoardProps>((props) => {
  return (

    <div class="container">
    <section>
    <div class="flex flex-col px-12 pt-9 pb-5 mt-32 rounded-3xl border-black border-solid border-[3px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 text-black max-md:flex-wrap max-md:max-w-full">
        <div class="flex-auto text-4xl">Board 1 </div>
        <div class="flex-auto self-start text-base">Created: 11/Sep/2001</div>
      </div>
      <div class="mt-6 text-2xl text-black underline max-md:max-w-full">
        Tags : <span class="underline">#9/11</span>{" "}
        <span class="underline">#terrorism</span>{" "}
        <span class="underline">#gae</span>{" "}
        <span class="underline">#yourmom</span>
      </div>
      <div class="mt-10 text-2xl text-black max-md:max-w-full">
        Description -&gt; y’all gae 🛩💥🏢🏢 🏳️‍🌈{" "}
      </div>
      <div class="flex gap-5 items-start mt-10 max-w-full w-[336px]">
        <div class="flex flex-1 gap-4 items-start px-3 py-px text-3xl whitespace-nowrap bg-white">
          <div class="justify-center self-start px-5 py-1.5 bg-white border-2 border-black border-solid rounded-[50px] text-zinc-950">
            🖕
          </div>
          <div class="my-auto text-black">112</div>
        </div>
        <div class="flex flex-1 gap-4 items-start px-3 py-px text-3xl whitespace-nowrap bg-white">
          <div class="justify-center self-start px-5 py-1.5 bg-white border-2 border-black border-solid rounded-[50px] text-zinc-950 rotate-180">
            🖕
          </div>
          <div class="my-auto text-black">112</div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
});


