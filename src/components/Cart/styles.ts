import styled from 'styled-components'

export const Table = styled.table`
  margin: 30px;
  border-radius: 3px;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #ccc;
  font-weight: 300;

  td,
  th {
    padding: 5px 10px;
    border: 1px solid #ccc;
  }

  thead {
    font-size: 1.1em;
    text-align: center;
  }

  th[scope='row'] {
    font-weight: 600;
    text-align: left;
  }

  .price {
    text-align: right;
  }

  .line-item {
    th {
      font-weight: normal;
    }
  }
`
