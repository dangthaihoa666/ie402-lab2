export const left_building_floor1 = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const bottomFloor = new GeoJSONLayer({
    url: "./data/leftBuilding/firstFloor/floor/left.building.bottom.floor.geojson.json",
  });

  const floor  = new  GeoJSONLayer({
    url: "./data/leftBuilding/firstFloor/floor/left.building.floor.geojson.json",
  });

  const tileFloor = new GeoJSONLayer({
    url: "./data/leftBuilding/firstFloor/floor/left.building.tile.floor.geojson.json",
  });


  bottomFloor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.1,
          material: {
            color: "#8e8e8e",
          },
        },
      ],
    },
  };

  floor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.2,
          material: {
            color: "#64646c",
          },
        },
      ],
    },
  };

  tileFloor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.01,
          material: {
            color: "#8f6f57",
          },
        },
      ],
    },
  };

  return [
    bottomFloor,
    floor,
    tileFloor
  ];
};
