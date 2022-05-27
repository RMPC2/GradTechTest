// The function that will create the medal table
function createMedalTable(medals) {

    // Variable for the medal table
    const medalTable = {};

    // Variable for the points system: 1st Place gets 3 points, 2nd place 2 points and 3rd place 1 point
    const medalPoints = {
      1: 3,
      2: 2,
      3: 1
    };

    // Loop that builds the medal table 
    for(let event of medals) {
      const podiumResult = event.podium;

      // Declares input data and splits sring into medal postion and country
      for(let positionData of podiumResult) {
        const temp = positionData.split(".");

        // Declares first part of the podium data as medal position
        const position = temp[0];

        // Declares 2nd part of the podium data as the country
        const country = temp[1];
        
        // Looks for country in medal table
        if(!(country in medalTable)) {
          medalTable[country] = 0;
        }

        // Builds with the medal table using the data
        medalTable[country] = medalTable[country] + medalPoints[position];
      }
    }

    // Displays the medal table 
    return medalTable;
}

describe("Medal Table Generator", () => {
    // Test function, please do not edit
    it("creates correct data structure ", () => {
        // Input data
        const medals = [{
                sport: "cycling",
                podium: ["1.China", "2.Germany", "3.ROC"]
            },
            {
                sport: "fencing",
                podium: ["1.ROC", "2.France", "3.Italy"]
            },
            {
                sport: "high jump",
                podium: ["1.Italy", "1.Qatar", "3.Belarus"]
            },
            {
                sport: "swimming",
                podium: ["1.USA", "2.France", "3.Brazil"]
            }
        ];

        // Expected output data
        const medalTable = {
            "Italy": 4,
            "France": 4,
            "ROC": 4,
            "USA": 3,
            "Qatar": 3,
            "China": 3,
            "Germany": 2,
            "Brazil": 1,
            "Belarus": 1,
        };

        const actualResult = createMedalTable(medals);
        expect(actualResult).toMatchObject(medalTable);
    });
});