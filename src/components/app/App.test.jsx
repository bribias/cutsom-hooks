import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import listData from '../../fixtures/listData.json';
import detailData from '../../fixtures/detailData.json';

const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json(listData));
    })
);

describe('Hey Arnold App', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('displays a list of hey arnold characters', async () => {
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        screen.getAllByAltText('loading spinner');

        const ul = await screen.findByRole('list', { name: 'character-list' });
        expect(ul).not.toBeEmptyDOMElement();
        expect(container).toMatchSnapshot();
    });
});