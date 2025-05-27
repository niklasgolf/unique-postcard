"use client";

import { usePostcard } from "../../context/PostcardContext";
import styles from "./Address.module.css";

export default function AddressMain() {
  const { address, setAddress } = usePostcard();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Address</h2>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows={4}
        className={styles.textarea}
        placeholder="Enter address..."
      />
    </div>
  );
}


// "use client";

// import { usePostcard } from "../../context/PostcardContext";
// import styles from "./Address.module.css";
// import { useState } from "react";
// import TestingAddress from "../../components/TestingAddress";

// export default function AddressMain() {
//   const { address, setAddress } = usePostcard();
//   const [showTest, setShowTest] = useState(false);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>Edit Address</h2>
//       <textarea
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         rows={4}
//         className={styles.textarea}
//         placeholder="Enter address..."
//       />
//       <h2 className={styles.heading}>Unit Tests</h2>
//       <button onClick={() => setShowTest(!showTest)}>
//         {showTest ? "Hide Tests" : "Run Unit Tests"}
//       </button>
//       {showTest && <TestingAddress />}
//     </div>
//   );
// }

// "use client";

// import { usePostcard } from "../../context/PostcardContext";
// import styles from "./Address.module.css";

// export default function AddressMain() {
//   const { address, setAddress } = usePostcard();

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>Edit Address</h2>
//       <textarea
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         rows={4}
//         className={styles.textarea}
//         placeholder="Enter address..."
//       />
//     </div>
//   );
// }
