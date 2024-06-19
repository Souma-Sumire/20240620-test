console.log("Hello World!");
Options.Triggers.push({
  id: "test_20240620",
  zoneId: ZoneId.MatchAll,
  config: [
    {
      id: "TEST",
      name: { en: "TEST" },
      type: "select",
      options: { en: { "A": "A", B: "B", C: "C" }, },
      default: "A",
    },
  ],
  triggers: [
    {
      id: "test",
      type: "StartsUsing",
      netRegex: { id: ["8682", "86F6"], capture: false },
      infoText: 'Hello!'
    },
  ],
});
