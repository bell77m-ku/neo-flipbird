import { component$ } from '@builder.io/qwik';
import { BackBtn } from '~/components/backBtn/backBtn';

export default component$(() => {
  return (
    <div class="container">
    <div class="flex flex-col self-center px-5 mt-4 w-full max-w-[1223px] max-md:max-w-full">
      <div class="flex gap-5 mt-40 max-w-full text-6xl font-bold text-black w-[688px] max-md:flex-wrap max-md:mt-10 max-md:text-4xl">
        <div class="flex-auto max-md:max-w-full max-md:text-4xl">
          <BackBtn/>
        </div>
      </div>
      <div class="self-start mt-12 text-3xl font-bold text-black max-md:mt-10">
        Add your Board Name
      </div>
      <div class="items-start px-8 pt-8 pb-14 mt-7 text-3xl bg-white rounded-3xl border-black border-solid border-[3px] text-zinc-500 max-md:px-5 max-md:max-w-full">
      <input class="w-full h-full md:pl-2 focus:outline-none" placeholder='Just write anything ....' />
      </div>
      <div class="self-start mt-28 text-3xl font-bold text-black max-md:mt-10">
        Add your board Hashtag
      </div>
      <div  class="items-start px-8 pt-8 pb-14 mt-7 text-3xl bg-white rounded-3xl border-black border-solid border-[3px] text-zinc-500 max-md:px-5 max-md:max-w-full">
        <input class="w-full h-full md:pl-2 focus:outline-none" placeholder='Just write anything ....' />
      </div>
      <div class="self-start mt-28 text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full">
        Add your board Description
      </div>
      <div class="items-start px-8 pt-8 pb-14 mt-7 text-3xl bg-white rounded-3xl border-black border-solid border-[3px] text-zinc-500 max-md:px-5 max-md:max-w-full">
      
      <input class="w-full h-full md:pl-2 focus:outline-none" placeholder='Just write anything ....' />
      </div>
      <button class="justify-center self-end px-12 py-11 mt-20 text-2xl font-bold text-black whitespace-nowrap rounded-3xl border-black border-solid shadow-sm bg-zinc-300 border-[3px] max-md:px-5 max-md:mt-10">
        CREATE
        </button>
    </div>
    </div>
  );
});
