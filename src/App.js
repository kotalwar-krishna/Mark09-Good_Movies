import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDb = {
  Action: [
    {
      name: "Tanhaji",
      description:
        "Tanhaji: The Unsung Warrior is a 2020 Indian Hindi-language historical action film co-written and directed by Om Raut and produced by Bhushan Kumar, Krishan Kumar and Ajay Devgn under T-Series Films and Ajay Devgn FFilms. This film was also released dubbed in Marathi-language following popular demand. Tracing the life of Maratha warrior Tanaji Malusare, it stars Ajay Devgn, Saif Ali Khan and Kajol in the lead roles",
      rating: "IMDb Rating: 7.6/10"
    },
    {
      name: "Bahubali-2",
      description:
        "Baahubali 2: The Conclusion is a 2017 Indian epic action film directed by S. S. Rajamouli who co-wrote the film with K. V. Vijayendra Prasad. It was produced by Shobu Yarlagadda and Prasad Devineni under the banner Arka Media Works. Simultaneously made in Telugu and Tamil languages, the film features an ensemble cast including Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah, Ramya Krishna, Sathyaraj, Nassar, and Subbaraju. The second cinematic part in the Baahubali franchise, it is the follow-up to Baahubali: The Beginning, serving as both a sequel and a prequel.[6] The film is set in medieval India and follows the sibling rivalry between Amarendra Baahubali and Bhallaladeva; the latter conspires against the former and has him killed by Kattappa. Years later, Amarendra's son returns to avenge his death.",
      rating: "IMDb Rating: 8.2/10"
    },
    {
      name: "Singham",
      description:
        "Singham is a 2011 Indian Hindi-language action film directed by Rohit Shetty and produced by Reliance Entertainment, based on a script by writers Yunus Sajawal and Farhad-Sajid. A remake of the 2010 Tamil film Singam by Hari Gopalakrishnan, the film stars Ajay Devgn as a station house officer turned police inspector Bajirao Singham, with Kajal Aggarwal playing his love interest and Prakash Raj playing the main antagonist. The theatrical trailer was attached with Salman Khan's Ready in June 2011. It was theatrically released in India on 22 July 2011 with a strong box office response; the film earned ₹876 million in India on the first day and a worldwide total of ₹1.57 billion against a ₹410 million budget, becoming a box-office blockbuster.",
      rating: "IMDb Rating: 7/10"
    }
  ],

  Comedy: [
    {
      name: "Welcome",
      description:
        "Welcome is an Indian 2007 Hindi-language comedy film directed and co-written by Anees Bazmee with production by Firoz Nadiadwala. The music was composed by Anand Raj Anand and Himesh Reshammiya, with songs and score by Sajid–Wajid. Welcome stars Feroz Khan, Anil Kapoor, Nana Patekar, Akshay Kumar, Katrina Kaif, Mallika Sherawat and Paresh Rawal in prominent roles.  Sunil Shetty makes a special appearance, while Malaika Arora was cast in an item number. The film marked the last screen appearance of Khan who died in 2009. The story is loosely based on the 1999 comedy Mickey Blue Eyes.",
      rating: "IMDb Rating: 8.1/10"
    },
    {
      name: "Hera Pheri",
      description:
        "Hera Pheri (transl. Monkey business) is a 2000 Indian Hindi-language comedy film directed by Priyadarshan, starring Akshay Kumar, Sunil Shetty, Paresh Rawal and Tabu. The film is remake of 1989 Malayalam film Ramji Rao Speaking which itself was based on the 1971 TV movie See The Man Run. The film spawned a sequel, Phir Hera Pheri, released in 2006. It is the first instalment of the Hera Pheri franchise. Over the years, the film went on to become a cult classic. It was voted as the best Bollywood comedy film of all time in an online poll conducted by The Indian Express.",
      rating: "IMDb Rating: 8.5/10"
    },
    {
      name: "Malamaal Weekly",
      description:
        "Malamaal Weekly is a 2006 Indian Hindi-language comedy film written and directed by Priyadarshan and starring Paresh Rawal, Om Puri, Riteish Deshmukh, Rajpal Yadav and Asrani. The film received mixed reviews from critics, but performed well at the box office, grossing ₹42.7 crore against a budget of ₹7 crore. It was a remake of Waking Ned (1998). The film was remade in Telugu as Bhagyalakshmi Bumper Draw and in Kannada as Dakota Picture. Priyadarshan himself remade the film in Malayalam as Aamayum Muyalum.",
      rating: "IMDb Rating: 8.3/10"
    }
  ],
  Horror: [
    {
      name: "Raaz",
      description:
        "Raaz (lit. 'secret') is a 2002 Indian supernatural horror film directed by Vikram Bhatt. The film stars Bipasha Basu, Dino Morea and Malini Sharma in lead roles. Aditya and Sanjana as a couple who have moved to Ooty to save their failing marriage. However, what they find in their new home is more than they expected when a ghost starts haunting the place. The wife, Sanjana, suddenly finds that her husband is part of the ghostly conspiracy, which she must fix to escape. The film is an unofficial adaptation of the Hollywood film What Lies Beneath (2000).",
      rating: "IMDb Rating: 6.5/10"
    },
    {
      name: "Phoonk 2",
      description:
        "Phoonk 2 (transl. Blow 2) is an Indian horror film written and directed by Milind Gadagkar. It is a sequel to Ram Gopal Varma's 2008 film Phoonk and stars Sudeep, Amruta Khanvilkar and Ahsaas Channa. The film was released on 16 April 2010 with about 900 prints worldwide including the digital format. Phoonk. The film was dubbed in Tamil as Bommai 2 and in Telugu as Aavaham.",
      rating: "IMDb Rating: 5.5/10"
    },
    {
      name: "Bhoot Returns",
      description:
        "Bhoot Returns (lit. 'Ghost Returns') is a 2012 Indian Hindi 3D horror film directed by Ram Gopal Varma and written by Ravi Shankar. The film was released on 12 October 2012 to mixed reviews.The film stars Manisha Koirala, J. D. Chakravarthy, Madhu Shalini and Alayana Sharma in the lead role. Although advertised as a sequel to the 2003 film Bhoot, also directed by Varma, the two film's do not have any connection with one another and have complete different plots A further sequel, Bhoot 3 is in production.",
      rating: "IMDb Rating: 5.6/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Good Movies </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite Movies. Select a list to get started
      </p>
      <div></div>

      <div>
        {Object.keys(movieDb).map((genre) => (
          <button
            className="btn-style"
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "20%" }}>
          {movieDb[selectedGenre].map((movies) => (
            <li key={movies.name}>
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
                {" "}
                {movies.name}{" "}
              </div>
              <div style={{ fontSize: "small" }}> {movies.description} </div>
              <div style={{ fontSize: "smaller" }}> {movies.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
