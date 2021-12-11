import {
  BellFilled,
  CaretDownOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Col, Input, Row, Typography } from 'antd';
import 'antd/dist/antd.css'; // ←を追加したらドキュメント通りのcssが当たるようになった

const { Title } = Typography;

function App() {
  return (
    <div className='App'>
      <header className='App-header' style={{ backgroundColor: '#54C500' }}>
        <Row align='middle' style={{ height: '50px' }}>
          <Col offset={4}>
            <Title
              level={3}
              style={{
                color: 'white',
                marginBottom: '0',
                paddingRight: '5px',
              }}
            >
              Qiita
            </Title>
          </Col>
          <CaretDownOutlined
            style={{ color: 'white', backgroundColor: '#3F8001' }}
          />
          <Col span={6}>
            <Input placeholder='Basic usage' />
          </Col>
          <Col
            offset={6}
            style={{ color: 'white', backgroundColor: '#3F8001' }}
          >
            <FormOutlined />
            投稿する
          </Col>
          <BellFilled style={{ color: 'white' }} />
          <Avatar
            shape='circle'
            style={{ backgroundColor: 'gray' }}
            icon={<UserOutlined />}
          />
        </Row>
      </header>
    </div>
  );
}

export default App;
