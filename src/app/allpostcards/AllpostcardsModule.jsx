"use client";

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";
import styles from "./Allpostcards.module.css";

export default function AllpostcardsModule() {
  const [postcardsByUser, setPostcardsByUser] = useState([]);

  const knownUsers = [
    "f1223km@student.lnu.se",
    "nh222zn@student.lnu.se",
    "niklas.herrloff@gmail.com",
    "niklas.herrloff@skolakalmar.se",
    "tg222hh@student.lnu.se",
  ];

  useEffect(() => {
    async function fetchGroupedPostcards() {
      const allGroups = [];

      for (const userEmail of knownUsers) {
        console.log(`📦 Fetching postcards from ${userEmail}`);
        const snapshot = await getDocs(
          collection(db, "postcards", userEmail, "postcards")
        );
        const userCards = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        if (userCards.length > 0) {
          allGroups.push({
            userEmail,
            cards: userCards,
          });
        }
      }

      setPostcardsByUser(allGroups);
    }

    fetchGroupedPostcards();
  }, []);

  return (
    <div className={styles.container}>
      {postcardsByUser.length === 0 ? (
        <p className={styles.info}>No postcards found.</p>
      ) : (
        postcardsByUser.map(({ userEmail, cards }) => (
          <div key={userEmail} className={styles.group}>
            <h2 className={styles.heading}>Postcards from {userEmail}</h2>
            {cards.map((card) => (
              <div key={card.id} className={styles.card}>
                {card.imageUrl ? (
                  <img
                    src={card.imageUrl}
                    alt="Postcard"
                    className={styles.image}
                  />
                ) : null}

                <div className={styles.details}>
                  <p>
                    <strong>To:</strong> {card.recipient}
                  </p>
                  <p>
                    <strong>Address:</strong> {card.address}
                  </p>
                  <p>
                    <strong>Message:</strong> {card.message}
                  </p>
                  <p>
                    <strong>From:</strong> {card.sender}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import styles from "./Allpostcards.module.css";

// export default function AllpostcardsMain() {
//   const [postcards, setPostcards] = useState([]);

//   // 👇 Define the known users here manually
//   const knownUsers = [
//     "f1223km@student.lnu.se",
//     "nh222zn@student.lnu.se",
//     "niklas.herrloff@gmail.com",
//     "niklas.herrloff@skolakalmar.se",
//     "tg222hh@student.lnu.se",
//   ];

//   useEffect(() => {
//     async function fetchAllPostcards() {
//       console.log("📥 Starting to fetch postcards for all known users...");

//       try {
//         const allCards = [];

//         for (const userEmail of knownUsers) {
//           console.log(`🔍 Fetching postcards for user: ${userEmail}`);
//           const userPostcardsRef = collection(
//             db,
//             "postcards",
//             userEmail,
//             "postcards"
//           );
//           const userPostcardsSnap = await getDocs(userPostcardsRef);

//           console.log(
//             `📨 Found ${userPostcardsSnap.size} postcard(s) for ${userEmail}`
//           );

//           userPostcardsSnap.forEach((doc) => {
//             const card = { ...doc.data(), id: doc.id, userEmail };
//             console.log("🧾 Postcard:", card);
//             allCards.push(card);
//           });
//         }

//         console.log("📦 Final postcard list:", allCards);
//         setPostcards(allCards);
//       } catch (err) {
//         console.error("❌ Error fetching postcards:", err);
//       }
//     }

//     fetchAllPostcards();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>All Postcards</h2>

//       {postcards.length === 0 && (
//         <p className={styles.info}>No postcards found.</p>
//       )}

//       {postcards.map((card) => (
//         <div key={card.id + card.userEmail} className={styles.card}>
//           <img src={card.imageUrl} alt="Postcard" className={styles.image} />
//           <div className={styles.details}>
//             <p className={styles.subheading}>Postcards from {card.userEmail}</p>
//             <p>
//               <strong>To:</strong> {card.recipient}
//             </p>
//             <p>
//               <strong>Address:</strong> {card.address}
//             </p>
//             <p>
//               <strong>Message:</strong> {card.message}
//             </p>
//             <p>
//               <strong>From:</strong> {card.sender}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
