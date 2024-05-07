function doPost(e) {
  const postData = JSON.parse(e.postData.contents);
  // ここでtoken認証
  if (postData.token !== PropertiesService.getScriptProperties().getProperty('GAS_POST_API_METRIX_TOKEN')) {
    return (createResponse('invalid token error'))
  }

  switch (postData.type) {
    case 'lead_time':
      insertLeadTimeData(postData);
      return (createResponse('ok'))
      break;
    default:
      return (createResponse('invalid type error'))
  }
}

function insertLeadTimeData(postData) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('lead_time');
  const data = postData.data;
  const tdjiPattern = /TDJI-\d+/;
  const tdjiMatch = data.title.match(tdjiPattern);
  const tdji = tdjiMatch ? tdjiMatch[0] : '';
  sheet.appendRow([
    tdji,
    data.repository,
    data.title,
    data.user,
    data.url,
    data.head,
    data.firstCommittedAt,
    data.createdAt,
    data.firstReviewedAt,
    data.mergedAt,
    data.additions,
    data.deletions,
    data.changedFiles
  ]);
}

function createResponse(message) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({ message: message }));
  return output;
}