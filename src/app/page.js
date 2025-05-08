import Post from "./components/Post";


export default function Home() {

  return (
    <div className="p-4">
      <Post 
      name={"John Doe"}
      statusText={":-D"}
      initialLikeCount={5}
      />
            <Post 
      name={"Peter Bennett"}
      statusText={"GRRRR my neighbours are so noisy"}
      initialLikeCount={78}
      />

    </div>
  );
}
