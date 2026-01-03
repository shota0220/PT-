"use client";
import {useState} from "react";
 type PT = {
id: number;
name: string;
specialty: string;
experience: number;
 };

 export default function Home() {
  // 利用者入力
  const [symptom, setSymptom] = useState("");
  const [recommendedPT, setRecommendedPT] = useState<PT | null>(null);

  //ダミー理学療法士データ
  const pts: PT[] = [
    { id: 1, name: "山田太郎", specialty: "膝・変形性膝関節症", experience: 10 },
    { id: 2, name: "佐藤花子", specialty: "脳卒中・片麻痺", experience: 8 },
    { id: 3, name: "鈴木一郎", specialty: "腰痛・姿勢改善", experience: 12 },
  ];

  //マッチング処理
  const handleMatch = () => {
    const match = pts.find((pt) =>
      pt.specialty.includes(symptom)
  );
    setRecommendedPT(match || null);
};

  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "0 auto "}}>
      <h1>理学療法士マッチングサービス</h1>

      <section style={{ marginTop: "30px"}}>
        <h2>① お悩み入力</h2>
        <input
          type="text"
          placeholder="例：膝の痛み、腰痛、脳卒中"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          style={{ width: "100%", padding: "8px"}}
        />
        <button
         onClick={handleMatch}
         style={{ width: "100%", padding: "8px"}}
         >
          理学療法士を探す
          </button>
      </section>

      <section style={{ marginTop: "40px"}}>
        <h2>② 登録理学療法士一覧</h2>
        <ul>
          {pts.map((pt) => (
            <li key={pt.id}>
              {pt.name} | 専門：{pt.specialty} | 経験年数：{pt.experience}年
              </li>
          ))}
          </ul>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2>③ あなたへのおすすめ</h2>
          {recommendedPT ? (
            <div>
              <p>
                <strong>{recommendedPT.name}</strong>
              </p>
              <p>専門：{recommendedPT.specialty}</p>
              <p>経験年数：{recommendedPT.experience}年</p>
              </div>
          ) : (
            <p>まだおすすめは表示できません</p>
          )}
          </section>
          </main>
  );
}
