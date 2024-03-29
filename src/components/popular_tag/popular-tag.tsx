import { component$ } from '@builder.io/qwik';

export interface PopularTagProps {

}

export const PopularTag = component$<PopularTagProps>((props) => {
  return (
    <div class = "container">
    <p class="text-2xl font-semibold">Popular Tags</p>
    <div class="flex justify-center items-center px-16 py-12 mt-5 rounded-3xl border-black border-solid shadow-sm border-[3px] max-md:px-5 max-md:max-w-full">
      <div class="max-w-full w-[815px]">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-3xl text-black max-md:mt-10">
              <div class="underline">#yourmom</div>
              <div class="mt-14 underline max-md:mt-10">#Chemistry</div>
              <div class="mt-14 underline max-md:mt-10">#KFC </div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-3xl text-black whitespace-nowrap max-md:mt-10">
              <div class="underline">#9/11</div>
              <div class="mt-14 underline max-md:mt-10">#1989</div>
              <div class="mt-14 underline max-md:mt-10">#ColonelSa..</div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-3xl text-black whitespace-nowrap max-md:mt-10">
              <div class="underline">#gae</div>
              <div class="mt-14 underline max-md:mt-10">#LGBTC++</div>
              <div class="mt-14 underline max-md:mt-10">#Lorem</div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-3xl text-black whitespace-nowrap max-md:mt-10">
              <div class="underline">#Science</div>
              <div class="mt-14 underline max-md:mt-10">#BRUH</div>
              <div class="mt-14 underline max-md:mt-10">#Obamium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});
