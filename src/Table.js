import React from 'react';

function Table() {
  return (
    <>
    <div className='main_table'>
        Период от <input type='date' /> до <input type='date' /> <br /><br />

        <input type='button' value='Taблица'/>
        <input type='button' value='График'/> <br /><br />
        
        <input type='text' placeholder='Поиск страны'/>
        <select>
            <option selected>Выберете Фильтр</option>
            <option>Фильтр 1</option>
            <option>Фильтр 2</option>
            <option>Фильтр 3</option>
        </select>
        <input type='text' placeholder='Значение от'/>
        <input type='text' placeholder='Значение до'/> <br /><br />

        <input type='button' value='Сбросить фильтры'/>
    <table>
          <thead>
              <tr>
                  <th>Страна</th>
                  <th>Колличество случаев</th>
                  <th>Колличество смертей</th>
                  <th>Колличество случаев всего</th>
                  <th>Колличество смертей всего</th>
                  <th>Колличество случаев на 1000 жителей</th>
                  <th>Колличество смертей на 1000 жителей</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john.doe@example.com</td>
                  <td>(123) 456-7890</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>jane.smith@example.com</td>
                  <td>(456) 789-0123</td>
              </tr>
              <tr>
                <td></td>
              </tr>
          </tbody>
      </table>
      </div>
      </>
  );
}

export default Table;