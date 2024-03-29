import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface BackBtnProps {

}

export const BackBtn = component$<BackBtnProps>((props) => {
  useStylesScoped$(`
  `);
  return (
    <div class="container">
      <div>
        <Link href="/" class="bg-transparent">
        <section class="flex items-center text-black">
        <img
               width={118/4 }
              height={118/4}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad4afd27dabb4ee4480947c691d739aecdba6f4e3362b429cf5dca958634f5b8?apiKey=80699746842b49ec8adeb7230d298b8e&"
              class="shrink-0 max-w-full aspect-square w-[118px]"
            />
            <p style="font-size: 30px;">back</p>
        </section>
      </Link>
      </div>
    </div>
  );
});
