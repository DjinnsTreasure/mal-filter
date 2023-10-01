import React from "react";

const GenreFilter = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="">Any Genre</option>
      <option value="1">Action</option>
      <option value="50">Adult Cast</option>
      <option value="2">Adventure</option>
      <option value="51">Anthropomorphic</option>
      <option value="5">Avant Garde</option>
      <option value="46">Award Winning</option>

      <option value="28">Boys Love</option>

      <option value="52">CGDCT</option>
      <option value="53">Childcare</option>
      <option value="54">Combat Sports</option>
      <option value="4">Comedy</option>
      <option value="81">Crossdressing</option>

      <option value="55">Delinquents</option>
      <option value="39">Detective</option>
      <option value="8">Drama</option>

      <option value="9">Ecchi</option>
      <option value="56">Educational</option>
      <option value="49">Erotica</option>

      <option value="10">Fantasy</option>

      <option value="57">Gag Humor</option>
      <option value="26">Girls Love</option>
      <option value="58">Gore</option>
      <option value="47">Gourmet</option>

      <option value="35">Harem</option>
      <option value="12">Hentai</option>
      <option value="59">High Stakes Game</option>
      <option value="13">Historical</option>
      <option value="14">Horror</option>

      <option value="60">Idols (Female)</option>
      <option value="61">Idols (Male)</option>
      <option value="62">Isekai</option>
      <option value="63">Iyashikei (healing)</option>

      <option value="43">Josei</option>

      <option value="15">Kids</option>

      <option value="64">Love Polygon</option>

      <option value="65">Magical Sex Shift</option>
      <option value="66">Mahou Shoujo</option>
      <option value="17">Martial Arts</option>
      <option value="18">Mecha</option>
      <option value="67">Medical</option>
      <option value="38">Military</option>
      <option value="19">Music</option>
      <option value="7">Mystery</option>
      <option value="6">Mythology</option>

      <option value="68">Organized Crime</option>
      <option value="69">Otaku Culture</option>

      <option value="20">Parody</option>
      <option value="70">Performing Arts</option>
      <option value="71">Pets</option>
      <option value="40">Psychological</option>

      <option value="3">Racing</option>
      <option value="72">Reincarnation</option>
      <option value="73">Reverse Harem</option>
      <option value="22">Romance</option>
      <option value="74">Romantic Subtext</option>

      <option value="21">Samurai</option>
      <option value="23">School</option>
      <option value="24">Sci-Fi</option>
      <option value="42">Seinen</option>
      <option value="25">Shoujo</option>
      <option value="27">Shounen</option>
      <option value="75">Showbiz</option>
      <option value="36">Slice of Life</option>
      <option value="29">Space</option>
      <option value="30">Sports</option>
      <option value="11">Strategy Game</option>
      <option value="31">Super Power</option>
      <option value="37">Supernatural</option>
      <option value="76">Survival</option>
      <option value="41">Suspense</option>
      
      <option value="77">Team Sports</option>
      <option value="78">Time Travel</option>
      
      <option value="32">Vampire</option>
      <option value="79">Video Game</option>
      <option value="80">Visual Arts</option>

      <option value="48">Workplace</option>
      
    </select>
  );
};

export default GenreFilter;
