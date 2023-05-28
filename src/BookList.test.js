import React from 'react'
import {render} from '@testing-library/react'

import BookList from './BookList';
import BookDetail from './BookDetail';
import {MemoryRouter as Router} from 'react-router-dom';

const renderWithRouter = (component) => {
  return {...render(
      <Router>
        {component}
      </Router>
    )}
};

describe('BookList', () => {
  it('loading', () => {
    const props = {
      loading: true
    };
    const {container} = render(<BookList {...props} />)
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Loading');
  });

  it('error', () => {
    const props = {
      error: true
    };
    const {container} = render(<BookList {...props} />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Error');
  })

  it('render books', () => {
    const props = {
      books: [
        { 'name': 'Refactoring', 'id': 1 },
        { 'name': 'Domain-driven design', 'id': 2 },
      ]
    };
    const { container } = renderWithRouter(<BookList {...props} />);
    const titles = [...container.querySelectorAll('h2')].map(x => x.innerHTML);
    expect(titles).toEqual(['Refactoring', 'Domain-driven design']);
  })
});

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring'
      }
    };
    const {container} = render(<BookDetail {...props} />);
    const title = container.querySelector('.book-title');
    expect(title.innerHTML).toEqual(props.book.name);
  })

  it('renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description: "Martin Fowler's Refactoring defined core ideas and techniques " +
          "that hundreds of thousands of developers have used to improve " +
          "their software."
      }
    };
    const { container } = render(<BookDetail {...props} />);
    const description = container.querySelector('p.book-description');
    expect(description.innerHTML).toEqual(props.book.description);
  })
});