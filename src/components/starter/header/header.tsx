import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import "../../../../node_modules/purecss/build/grids.css";
import "../../../../node_modules/purecss/build/grids-responsive.css";
import { Image } from '@unpic/qwik';
import { Link} from '@builder.io/qwik-city';



export default component$(() => {
  useStylesScoped$(STYLES);
  const height: Number = 182.333
  const width: Number = 164.333
  const title: string = "Flip Bird"
  return (
    <header>
      <div class=" mt-10 grid md:grid-cols-3 gap-3">
        <div/>
        <div >
          <Link style={{color: "black"}} href="/joke">
          <div class="logo">
              <Image class="img pure-img" height={height} width={width} src="https://cdn.builder.io/api/v1/image/assets%2F80699746842b49ec8adeb7230d298b8e%2F5a682ac8f0bd4314a72dfedda4f9db2e"/>
              <p class="title">{title}</p>
          </div>
          </Link>
        </div>
        <div class="mx-auto md:flex">
          <div class="section-user">
            <p class ="text uname">username@dommie</p>
            <p class ="text">Identified as Jesus</p>
            <p class ="text">Pronounce Je/Jeself</p>
          </div>
        </div>
      
      </div>
    </header>);
});


export const STYLES = `

.img {
  aspect-ratio: 1.11;
  object-fit: auto;
  object-position: center;
  width: 205px;
  margin-top: 14px;
  max-width: 100%;
  justify-content: center;
}

.title {
  width: 60px; 
  font-family: Inter, sans-serif;
  font-size: 60px;
  margin-left: 15px;
  margin-top: 28px;
  line-height: 65px;
}
.logo{
  margin-top: 25px;
  display: flex;
  justify-content: center;
}
.title{
  
  font-size: 60px;
}
.uname{
  font-size: 25px;
}
.text{
  margin-top: 11px;
  text-align: right;
}
.section-user{
    margin-right: 25px;
    margin-bottom: 25px;
}


`;