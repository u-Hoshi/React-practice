import {
  BellOutlined,
  CaretDownOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Input } from 'antd';
import 'antd/dist/antd.css'; // ←を追加したらドキュメント通りのcssが当たるようになった

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
            <Avatar
              shape='circle'
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
