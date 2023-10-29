import React from "react";
import "./packages.css";

const Packages = () => {
  return (
    <div>
      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold my-10">
          Genius Lanka Tours packages
        </h1>
      </div>
      <div className="w-3/5 m-auto">
        <h1 className="pb-5 font-semibold text-xl text-sky-700">
          Three Days (Two Nights Tour Packages)
        </h1>
        <table id="customers" className="">
          <tr>
            <th>Tour name</th>
            <th>Theme</th>
            <th>Key Activities</th>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Anuradhapura</li>
                <li>Polonnaruwa</li>
                <li>Sigiriya</li>
                <li>Dambulla</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Culture</li>
                <li>Ruins</li>
                <li>Buddhism</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Explore the Ancient City/Ruins</li>
                <li>Visit the Sri Maha Bodhi</li>
                <li>Visit Gal Vihara</li>
                <li>Climb Sigiriya Rock</li>
                <li>Visit the Water Gardens</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Kandy + Dambulla + Sigiriya & Polonnaruwa</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Yala + Nuwara -Eliya & Pinnawala</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Galle + Yala + Nuwara Eliya & Kandy</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nuwara + Eliya-Worlds End & Udavalawa Safari</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Nuwara-Eliya & kandy</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tirncomali + Sigiriya & Dambulla</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Packages;
