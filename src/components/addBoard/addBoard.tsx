import { component$  } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';


export interface AddBoardProps {
}

export const AddBoard = component$<AddBoardProps>((props) => {
  const nav = useNavigate();
  return (
    <div class="container flex justify-end">
      <div class="flex gap-5 px-5 text-3xl max-w-[504px] max-md:flex-wrap">
        <div class="flex-auto my-auto text-zinc-500">Create your board</div>
        <button onClick$={()=>nav('/createBoard')} class="justify-center items-start px-16 py-7 text-black whitespace-nowrap rounded-3xl border-black border-solid shadow-sm bg-zinc-300 border-[3px] max-md:pr-5 max-md:pl-6">
        <div class="text-2xl">
          Add
        </div>
        </button>
      </div>
    </div>
  );
});
