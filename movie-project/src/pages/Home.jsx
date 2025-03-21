import MovieCart from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "1998" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCart movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
