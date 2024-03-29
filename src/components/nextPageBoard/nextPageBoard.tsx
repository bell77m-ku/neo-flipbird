import { component$ } from '@builder.io/qwik';

export interface NextPageBoardProps {

}

export const NextPageBoard = component$<NextPageBoardProps>((props) => {
  return (
    <div class="container">
      <section >
        <div class="flex gap-5 px-5 text-3xl text-black whitespace-nowrap max-md:flex-wrap">
          <div class="flex-auto underline">Previous</div>
          <div class="underline">Next</div>
        </div>
      </section>
    </div>

  );
});
