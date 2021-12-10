import {
  BellOutlined,
  CaretDownOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Input } from 'antd';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <h1>Qiita</h1>
          <div>
            <CaretDownOutlined />
            <Input placeholder='Basic usage' />
          </div>
          <div>
            <div>
              <FormOutlined />
              投稿する
            </div>
            <div>
              <BellOutlined />
            </div>
            <Avatar size='large' icon={<UserOutlined />} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
