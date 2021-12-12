import {
  BellFilled,
  CaretDownOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Col, Input, Row, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title, Text } = Typography;

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
          <Col span={6} style={{ paddingLeft: '10px' }}>
            <Input placeholder='キーワードを入力' />
          </Col>
          <Col
            offset={6}
            style={{
              color: 'white',
              backgroundColor: '#3F8001',
              padding: '5px 10px',
            }}
          >
            <FormOutlined />
            <Text strong style={{ color: 'white' }}>
              投稿する
            </Text>
          </Col>
          <BellFilled
            style={{ fontSize: '18px', padding: '15px', color: 'white' }}
          />
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
