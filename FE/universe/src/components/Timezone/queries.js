import * as constants from './constants'

export const closestSearchName = (Name, searchTerm) => {
  const matchingRegionNames = Name.split("UTC")[0].split(',');
  return matchingRegionNames.find(
    regionName => regionName.toLowerCase().includes(searchTerm.toLowerCase())
  ) || matchingRegionNames[0];
};

export const getTimeZoneOffsetName = (Name) => Name.match(constants.timeZoneNameMatchRegex).pop();
