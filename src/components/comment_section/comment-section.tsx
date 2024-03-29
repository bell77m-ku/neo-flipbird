import { component$ } from '@builder.io/qwik';

export interface CommentSectionProps {

}

export const CommentSection = component$<CommentSectionProps>((props) => {
  return (
    <div class="container">
    <div class="flex flex-col px-12 pt-12 pb-7 mt-6 rounded-3xl border-black border-solid shadow-sm border-[3px] max-md:px-5 max-md:max-w-full">
      <div class="max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfb497bb2e24fe21d924da410834d9eb4eae2bbb3d62a4b0cf70702646643c?apiKey=80699746842b49ec8adeb7230d298b8e&"
              class="grow shrink-0 w-48 max-w-full aspect-[0.96] max-md:mt-10"
            />
          </div>
          <div class="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
            <div class="text-2xl text-black max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-5 self-end mt-8 text-base text-black max-md:flex-wrap">
        <div class="grow font-bold">User@1000</div>
        <div class="flex-auto">Pronouns: Obim/Obelf</div>
        <div class="flex-auto">Created: 11/sep/2001</div>
      </div>
    </div>
    </div>
  );
});
