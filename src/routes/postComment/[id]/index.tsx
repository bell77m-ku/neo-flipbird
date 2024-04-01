import { component$ , $, useSignal} from '@builder.io/qwik';
import { BackBtn } from '~/components/backBtn/backBtn';
import { useNavigate , useLocation} from '@builder.io/qwik-city';

export default component$(() => {
  const comment = useSignal<string>("");
  const nav = useNavigate();
  const loc = useLocation();


const createComment =  $( async (c:string) => {await fetch('http://127.0.0.1:5000/comments', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify( {
    "board_id": loc.params.id,
    "comment": c,
    "comment_date": "date"
})}) .then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Network response was not ok.');
  }
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
})});
  return (
    <div class="container">
    <div class="flex flex-col pt-20 bg-white">
      <div class="flex flex-col self-center px-5 mt-5 w-full font-bold text-black max-w-[1212px] max-md:max-w-full">

        <div class="flex gap-5 mt-32 max-w-full text-6xl w-[732px] max-md:flex-wrap max-md:mt-10 max-md:text-4xl">
          <BackBtn />

        </div>
        <div class="mt-14 text-3xl max-md:mt-10 max-md:max-w-full">
          Add your comment description
        </div>

        <input bind:value={comment}  class=" items-start px-8 pt-8 pb-14 mt-7 text-3xl bg-white rounded-3xl border-black border-solid border-[3px] text-zinc-500 max-md:px-5 max-md:max-w-full" placeholder="Write your thoughts here..." style="resize: none;" ></input>
      </div>
      <button onClick$={()=> { createComment(comment.value); nav(`/comments/${loc.params.id}`);}} class="justify-center self-end px-12 py-11 mt-20 text-2xl font-bold text-black whitespace-nowrap rounded-3xl border-black border-solid shadow-sm bg-zinc-300 border-[3px] max-md:px-5 max-md:mt-10" >
        CREATE
        </button>
    </div>
    </div>
  );
});
