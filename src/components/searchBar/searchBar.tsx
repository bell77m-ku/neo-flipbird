import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';
export interface SearchBarProps {

}

export const SearchBar = component$<SearchBarProps>((props) => {
  useStylesScoped$(`    .search-button {
    border: none;
    padding: 6px 0px;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    right: 2.4rem;
    padding: 0.85rem 0.5rem 0.4rem 0.5rem;
    outline: none;
  }
`)
  return (
    <div class="container">
      <div class="flex gap-5 px-8 py-6 mt-24 text-3xl whitespace-nowrap rounded-3xl border-black border-solid shadow-sm border-[3px] text-stone-300 max-md:flex-wrap max-md:px-5 max-md:mt-10">
        <section class="w-full flex items-center">
        <button class="bg-transparent focus:outline-none">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8dd1b764ac2d0bc62f80a964faf82d069f575221525223df4cff27bc49fb8186?apiKey=80699746842b49ec8adeb7230d298b8e&"
            class="shrink-0 aspect-square w-[42px]"
          />
        </button>
        <div class="ml-2 flex-auto my-auto max-md:max-w-full"><input class="w-full h-full md:pl-2 focus:outline-none" placeholder='Search....' /></div>
      </section>
      </div>
    </div>
  );
});
