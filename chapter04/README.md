# 테스트 구축하기

### 테스트가 필요한 이유?

오류를 찾기 위한 디버그는 험난한 여정이다. <br/>
대체로 디버그로 오류를 잡으면 몇줄만 수정하면 에러는 쉽게 처리된다. <br/>
하지만 문제는 에러를 찾기위해 디버그를 해야 하는 **험난한 여정에 드는 시간적 비용**이다. <br/>
따라서 **자가 테스트 코드를 이용해서 오류가 난 케이스를 테스트로 추가**해야 남의 시간을 절약시킨다. <br/>

하지만 이러한 장점이 있는데도 테스트를 간과하는 사람들은 많음 <br/>
그 이유는 많은데 대표적으로 테스트 코드를 잘못 작성하면 프로덕트 생산성을 저하시킬 수 있음 <br/>

### 테스트 단계

예제를 보면 첫번째는 텍스트 픽스쳐를 생성하고 <br/>
두번째에는 검증하고 있는데 요즘 내가 많이 쓰는 given-when-then 을 주석으로 달아주면 내 기준 더 보기 괜찮았음 <br/>

### 효율적인 테스트

- 저자가 말하는 효율적인 테스트는 잘못될까봐 가장 걱정되는 영역을 일단 테스트로 만들자. 인데
나는 단위 테스트를 작성할때 개인적으로 에러에 대한 테스트는 모두 작성해 두는 편임. 

- 테스트 코드 도 유지보수 되어야 할 코드임. 따라서 클린하게 작성될 필요가 있음.

- 음 개인적으로 beforeEach 에 테스트 픽스쳐를 넣는건 상당히 많은 고려가 필요함.
  - 예를 들면 현재는 같은 값이지만 나중엔 다른 값으로 처리해야 할 수 있는데 저게 beforeEach 에서 돌고있으면 전부 다 수정해야 하는 일들이 발생함.