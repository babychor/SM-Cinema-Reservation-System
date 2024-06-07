import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Book1.css';

const movies = [
  {
    name: 'SpaceMan',
    price: 350,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Damsel',
    price: 350,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'This is me... now',
    price: 350,
    occupied: [37, 25, 44, 13, 2, 3],
  },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function Book1() {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleConfirmBooking = () => {
    // Update the occupied seats for the selected movie
    const updatedMovie = {
      ...selectedMovie,
      occupied: [...selectedMovie.occupied, ...selectedSeats],
    };

    const updatedMovies = movies.map(movie =>
      movie.name === selectedMovie.name ? updatedMovie : movie
    );

    // Ideally, you should update state or perform backend operations here
    console.log('Booking confirmed:', selectedSeats);
    console.log('Updated movie:', updatedMovie);

    setBookingConfirmed(true);
    setSelectedMovie(updatedMovie); // Update selected movie state
    navigate('/Payment'); // Navigate to payment page
  };

  return (
    <div className="App">
      <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        You have selected{' '}
        <span className="count">{selectedSeats.length}</span> seats for the price
        of{' '}₱{' '}
        <span className="total">{selectedSeats.length * selectedMovie.price}</span>
      </p>

      {!bookingConfirmed && (
        <button className="confirm-button" onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
      )}
    </div>
  );
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (₱{movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          let className = 'seat';
          if (isSelected) className += ' selected';
          if (isOccupied) className += ' occupied';

          return (
            <span
              tabIndex="0"
              key={seat}
              className={className}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
