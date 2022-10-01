import { useState } from "react";
import { Container, Wrapper } from "./AmericanZipInputStyles";

const AmericanZipInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const entry = event.target.value.replace(/\D/g, "");

    setValue(entry);
  };

  return (
    <Container>
      <Wrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="zip">Enter your 5-digit zip code</label>
          <input
            maxLength={5}
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button disabled={value.length < 5}>Submit</button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default AmericanZipInput;
