import { component$, useResource$, Resource} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { AddBoard } from '~/components/addBoard/addBoard';
import { BackBtn } from '~/components/backBtn/backBtn';
import { Image } from '@unpic/qwik';
import { CommentSection } from '~/components/comment_section/comment-section';

type  comment = {
  comment_id: number,
  board_id: number,
  comment: string,
  comment_date: string

};

export default component$(() => {
  const loc = useLocation();
  const commentsData = useResource$( async ()=>{ 
    const res = await fetch("http://127.0.0.1:5000/comments");
    const data = await res.json();
    return data.comments;
 });


  return (<div class="container">
    <section>
      <BackBtn />
      <AddBoard link={`/postComment/${loc.params.id}`} />
      <Resource
          value={commentsData}
          onPending={() => <p>Loading...</p>}
          onResolved={data => 
            data.filter((d: comment) => d.board_id.toString() === loc.params.id)
                .map((d: comment, index: number) => 
                    <CommentSection 
                        key={index}
                        board_id={d.board_id} 
                        comment_id={d.comment_id} 
                        comment={d.comment} 
                        comment_date={d.comment_date}                  
                    />
                )
        }
        />
      
      
    </section>
    </div>
  );
});