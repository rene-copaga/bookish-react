import {
  checkAppTitle,
  checkBookDetail,
  checkBookListWith,
  checkReview,
  cleanUpStubBooks,
  composeReview,
  feedStubBooks,
  gotoApp,
  gotoNthBookInTheList,
  performSearch
} from "../../helpers";

describe('Bookish application', function() {
  beforeEach(() => {
    cleanUpStubBooks();
    feedStubBooks();
    gotoApp();
  });

  afterEach(() => {
    cleanUpStubBooks();
  });

  it('Visits the bookish', () => {
    checkAppTitle();
  });

  it('Shows a book list', () => {
    checkBookListWith(['Building Micro-service', 'Domain-driven design', 'Refactoring']);
  });

  it('Goes to detail page', () => {
    gotoNthBookInTheList(0);
    checkBookDetail();
  });

  it('Search for a title', () => {
    checkBookListWith(['Domain-driven design', 'Building Micro-service', 'Refactoring']);
    performSearch('design');
    checkBookListWith(['Domain-driven design']);
  });
})