import { useState } from "react";
import { WILLOW_COLOR, programs } from "@monorepo/utils/constants";
import { ProgramCriteria } from "@monorepo/utils/interfaces";
import { Range } from "react-range";
import styled from "@emotion/styled";
import SoloSlider from "./SoloSlider";
import { Typography } from "@mui/material";

const Container = styled.div`
  width: 95%;
  box-sizing: border-box;
  margin: 10px 0 10px 0;
`;

const RangeContainer = styled.div`
  margin: 10px 0 20px;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
`;

const Track = styled.div`
  height: 6px;
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
`;

const Thumb = styled.div`
  height: 20px;
  width: 20px;
  background-color: #999;
`;

const ProgramContainer = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
`;

const Criteria = () => {
  // State for your criteria
  const [amiValues, setAmiValues] = useState<[number, number]>([0, 120]);
  const [adaValues, setAdaValues] = useState<[number, number]>([0, 100]);
  const [isMixedIncome, setIsMixedIncome] = useState<boolean>(false);
  const [affordabilityTerm, setAffordabilityTerm] = useState<number>(0);
  const [buildingCommencement, setBuildingCommencement] = useState<string>("");
  const [occupancyDate, setOccupancyDate] = useState<string>("");
  const today = new Date().toISOString().split("T")[0];

  const ProgramInfo = styled.div<{ isApplicable: boolean }>`
    padding: 10px;
    margin-bottom: 5px;
    background-color: ${(props) =>
      props.isApplicable ? "#b8e994" : "#ff6b6b"};
    color: black;
  `;

  const checkCriteria = (
    programCriteria: ProgramCriteria,
    userCriteria: ProgramCriteria
  ) => {
    const checks = [];

    // AMI Range Check
    if (
      userCriteria.amiRange[0] < programCriteria.amiRange[0] ||
      userCriteria.amiRange[1] > programCriteria.amiRange[1]
    ) {
      checks.push(
        `AMI range is outside program criteria (${userCriteria.amiRange.join(
          "-"
        )}% vs ${programCriteria.amiRange.join("-")}%)`
      );
    }

    // ADA Range Check
    if (
      userCriteria.adaRange[0] < programCriteria.adaRange[0] ||
      userCriteria.adaRange[1] > programCriteria.adaRange[1]
    ) {
      checks.push(
        `ADA range is outside program criteria (${userCriteria.adaRange.join(
          "-"
        )}% vs ${programCriteria.adaRange.join("-")}%)`
      );
    }

    // Mixed Income Check
    if (programCriteria.mixedIncome && !userCriteria.mixedIncome) {
      checks.push(
        "Program requires mixed income and the property is not mixed income."
      );
    }

    // Affordability Term Check
    if (userCriteria.affordabilityTerm < programCriteria.affordabilityTerm) {
      checks.push(
        `Affordability term is less than required (${userCriteria.affordabilityTerm} years vs ${programCriteria.affordabilityTerm} years minimum).`
      );
    }

    // Additional checks can be added here similarly

    return checks.join(" | ");
  };

  // Function to determine if a user's criteria match a program's criteria
  // Additional checks within the criteriaMatch function
  const criteriaMatch = (
    programCriteria: ProgramCriteria,
    userCriteria: ProgramCriteria
  ) => {
    const amiMatch =
      userCriteria.amiRange[0] >= programCriteria.amiRange[0] &&
      userCriteria.amiRange[1] <= programCriteria.amiRange[1];
    const adaMatch =
      userCriteria.adaRange[0] >= programCriteria.adaRange[0] &&
      userCriteria.adaRange[1] <= programCriteria.adaRange[1];
    const mixedIncomeMatch =
      programCriteria.mixedIncome === userCriteria.mixedIncome;
    const affordabilityTermMatch =
      userCriteria.affordabilityTerm >= programCriteria.affordabilityTerm;

    let priorityAmiMatch = true;
    if (programCriteria.priorityAmi) {
      priorityAmiMatch =
        userCriteria.amiRange[1] <= programCriteria.priorityAmi;
    }

    let unhousedMatch = true;
    if (programCriteria.unhoused !== undefined) {
      unhousedMatch = programCriteria.unhoused === userCriteria.unhoused;
    }

    return (
      amiMatch &&
      adaMatch &&
      mixedIncomeMatch &&
      affordabilityTermMatch &&
      priorityAmiMatch &&
      unhousedMatch
    );
  };

  // Render the component
  return (
    <Container>
      {/* AMI Range slider */}
      <Typography>
        AMI Range: {amiValues[0]}% - {amiValues[1]}%
      </Typography>
      <RangeContainer>
        <Range
          step={1}
          min={0}
          max={120}
          values={amiValues}
          onChange={(values) => setAmiValues(values)}
          renderTrack={({ props, children }) => {
            const percentageLeft = (amiValues[0] / 120) * 100;
            const percentageRight = (amiValues[1] / 120) * 100;
            return (
              <Track
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  background: `linear-gradient(to right, #ccc ${percentageLeft}%, ${WILLOW_COLOR} ${percentageLeft}%, ${WILLOW_COLOR} ${percentageRight}%, #ccc ${percentageRight}%)`,
                  width: "100%",
                }}
              >
                {children}
              </Track>
            );
          }}
          renderThumb={({ props }) => (
            <Thumb
              {...props}
              style={{
                ...props.style,
                height: "12px",
                width: "12px",
                borderRadius: "50%",
                border: "2px solid black",
                backgroundColor: "white",
              }}
            />
          )}
        />
      </RangeContainer>

      {/* ADA Range slider */}
      <Typography>
        ADA Range: {adaValues[0]}% - {adaValues[1]}%
      </Typography>
      <RangeContainer>
        <Range
          step={1}
          min={0}
          max={100}
          values={adaValues}
          onChange={(values) => setAdaValues(values)}
          renderTrack={({ props, children }) => {
            const percentageLeft = (adaValues[0] / 100) * 100;
            const percentageRight = (adaValues[1] / 100) * 100;
            return (
              <Track
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  background: `linear-gradient(to right, #ccc ${percentageLeft}%, ${WILLOW_COLOR} ${percentageLeft}%, ${WILLOW_COLOR} ${percentageRight}%, #ccc ${percentageRight}%)`,
                  width: "100%",
                }}
              >
                {children}
              </Track>
            );
          }}
          renderThumb={({ props }) => (
            <Thumb
              {...props}
              style={{
                ...props.style,
                height: "12px",
                width: "12px",
                borderRadius: "50%",
                border: "2px solid black",
                backgroundColor: "white",
              }}
            />
          )}
        />
      </RangeContainer>

      {/* Mixed Income Radio Buttons */}
      <fieldset>
        <legend
          style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}
        >
          Is your property mixed income?
        </legend>
        <Typography>
          <input
            type="radio"
            name="mixedIncome"
            value="yes"
            checked={isMixedIncome}
            onChange={() => setIsMixedIncome(true)}
          />
          Yes
        </Typography>
        <Typography>
          <input
            type="radio"
            name="mixedIncome"
            value="no"
            checked={!isMixedIncome}
            onChange={() => setIsMixedIncome(false)}
          />
          No
        </Typography>
      </fieldset>

      {/* Affordability Term Slider */}
      <Typography sx={{ marginTop: "20px" }}>
        Term of Affordability: {affordabilityTerm} Years
        <SoloSlider
          min={0}
          max={100}
          step={1}
          initialValue={50}
          onChange={(value: any) => setAffordabilityTerm(Number(value))}
          fillColor={WILLOW_COLOR}
        />
      </Typography>

      {/* Building Commencement Date Picker */}
      <Typography sx={{ marginTop: "10px" }}>
        Expected Date of Building Commencement:
        <br />
        <input
          type="date"
          value={buildingCommencement}
          min={today}
          onChange={(e) => setBuildingCommencement(e.target.value)}
          style={{ marginTop: "4px" }}
        />
      </Typography>

      {/* Occupancy Date Picker */}
      <Typography sx={{ marginTop: "10px" }}>
        Expected Date of Occupancy:
        <br />
        <input
          type="date"
          value={occupancyDate}
          min={today}
          onChange={(e) => setOccupancyDate(e.target.value)}
          style={{ marginTop: "4px" }}
        />
      </Typography>

      {/* Display all programs with color coding and explanations */}
      <ProgramContainer>
        <Typography variant="h5" fontWeight={700}>
          ALL PROGRAMS
        </Typography>
        {programs.map((program, index) => {
          const isApplicable = criteriaMatch(program.criteria, {
            amiRange: amiValues,
            adaRange: adaValues,
            mixedIncome: isMixedIncome,
            affordabilityTerm,
          });
          const explanation = isApplicable
            ? "Applicable"
            : checkCriteria(program.criteria, {
                amiRange: amiValues,
                adaRange: adaValues,
                mixedIncome: isMixedIncome,
                affordabilityTerm,
              });

          return (
            <ProgramInfo key={index} isApplicable={isApplicable}>
              <Typography fontWeight={700}>{program.name}</Typography>
              <Typography>{explanation}</Typography>
            </ProgramInfo>
          );
        })}
      </ProgramContainer>
    </Container>
  );
};

export default Criteria;
